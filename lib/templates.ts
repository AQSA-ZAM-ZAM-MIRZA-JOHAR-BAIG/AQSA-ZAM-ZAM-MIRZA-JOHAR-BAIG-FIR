import { FIRFormData } from './types';
import { INCIDENT_CATEGORIES } from './categories';

export function generateFormalComplaintText(data: FIRFormData): string {
  const categoryObj = INCIDENT_CATEGORIES.find((c) => c.id === data.category);
  const categoryTitle = data.customCategoryTitle || categoryObj?.title || 'Police Complaint';
  
  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const bnsSectionText = categoryObj?.bnsReferences && categoryObj.bnsReferences.length > 0
    ? `(Applicable provisions under Bharatiya Nyaya Sanhita / IT Act: ${categoryObj.bnsReferences.join(', ')})`
    : '';

  // Format Accused details
  let accusedSectionText = '';
  if (!data.accusedList || data.accusedList.length === 0) {
    accusedSectionText = 'Unknown person(s) / Unidentified perpetrator(s).';
  } else {
    accusedSectionText = data.accusedList
      .map((acc, idx) => {
        if (acc.isUnknown) {
          return `${idx + 1}. Unknown Person / Unidentified Suspect (${acc.description || 'Description to be verified via CCTV / phone logs'})`;
        }
        const parts = [`${idx + 1}. ${acc.name}`];
        if (acc.phone) parts.push(`Phone/Contact: ${acc.phone}`);
        if (acc.address) parts.push(`Address: ${acc.address}`);
        if (acc.socialHandle) parts.push(`Social/Online Handle: ${acc.socialHandle}`);
        if (acc.description) parts.push(`Description: ${acc.description}`);
        return parts.join(' | ');
      })
      .join('\n');
  }

  // Format Stolen Items details
  let stolenItemsText = '';
  if (data.stolenItems && data.stolenItems.length > 0) {
    stolenItemsText = `\nPARTICULARS OF STOLEN / DAMAGED PROPERTY:\n` +
      data.stolenItems
        .map((item, idx) => `   (${idx + 1}) ${item.itemName} — Estimated Value: Rs. ${item.estimatedValue}${item.serialOrId ? ` (ID/Serial/IMEI: ${item.serialOrId})` : ''}${item.details ? ` [${item.details}]` : ''}`)
        .join('\n');
  }

  // Format Evidence
  let evidenceText = '';
  if (data.evidenceTypes && data.evidenceTypes.length > 0) {
    evidenceText = `\nEVIDENCE ATTACHED / AVAILABLE FOR INSPECTION:\n` +
      `   • Types: ${data.evidenceTypes.join(', ')}\n` +
      (data.evidenceDescription ? `   • Details: ${data.evidenceDescription}\n` : '');
  }

  // Format Witnesses
  let witnessText = '';
  if (data.witnesses && data.witnesses.length > 0) {
    witnessText = `\nWITNESS DETAILS:\n` +
      data.witnesses
        .map((w, idx) => `   (${idx + 1}) Name: ${w.name} | Contact: ${w.phone}${w.address ? ` | Address: ${w.address}` : ''}`)
        .join('\n');
  }

  // Reason for delay
  const delayText = data.delayReason && data.delayReason.trim().length > 0
    ? `\nNOTE ON TIMELINE / DELAY IN REPORTING:\n   ${data.delayReason}\n`
    : '';

  return `TO:
THE STATION HOUSE OFFICER / INSPECTOR IN-CHARGE,
${data.policeStationName ? `Police Station: ${data.policeStationName}` : '[Police Station Name]'},
District: ${data.district || '[District]'}, State: ${data.state || '[State]'}.

DATE: ${todayStr}

SUBJECT: FORMAL WRITTEN COMPLAINT / REQUEST FOR REGISTRATION OF FIR FOR ${categoryTitle.toUpperCase()} ${bnsSectionText}

RESPECTED SIR / MADAM,

I, the undersigned complainant, am submitting this formal written complaint for your immediate intervention and registration of First Information Report (FIR) / official investigation. My complete credentials are set forth below:

COMPLAINANT PARTICULARS:
• Full Name: ${data.complainantName || '[Full Name]'}
• Age / Gender: ${data.complainantAge ? `${data.complainantAge} Years` : '[Age]'} / ${data.complainantGender || '[Gender]'}
• Father's / Spouse's Name: ${data.guardianName || '[Father / Spouse Name]'}
• Permanent / Present Address: ${data.complainantAddress || '[Complete Address]'}
• Mobile Contact: ${data.complainantPhone || '[Phone Number]'}
• Email Address: ${data.complainantEmail || '[Email Address]'}
• Identity Proof: ${data.idType || 'Aadhaar / Gov ID'} - ${data.idNumber || '[ID Number]'}

INCIDENT LOCATION & TIMELINE:
• Date of Incident: ${data.incidentDate || '[Incident Date]'}
• Time of Incident: ${data.incidentTime || '[Incident Time]'}
• Place / Site of Occurrence: ${data.incidentLocation || '[Exact Location]'}
• Nearest Landmark: ${data.landmark || '[Landmark]'}
${delayText}
DETAILS OF ACCUSED / SUSPECT(S):
${accusedSectionText}
${stolenItemsText}
FACTS AND DETAILED NARRATION OF THE INCIDENT:
${data.incidentNarrative || '[Narrative of the incident]'}
${evidenceText}${witnessText}
PRAYER / RELIEF SOUGHT:
In light of the above facts, I earnestly pray that your good office may be pleased to:
1. Register a First Information Report (FIR) under the appropriate provisions of law.
2. Direct an immediate, fair, and thorough investigation into the matter.
3. Take strict legal action against the accused persons involved.
4. ${data.reliefRequested || categoryObj?.defaultRelief || 'Issue official acknowledgment of this complaint and provide a free certified copy of the FIR to the complainant.'}

VERIFICATION & DECLARATION:
I, ${data.complainantName || '[Complainant Name]'}, do hereby declare that the contents of this complaint are true and correct to the best of my knowledge, information, and belief. No material facts have been concealed herein.

Yours faithfully,


____________________________
Signature of Complainant
Name: ${data.complainantName || '[Complainant Name]'}
Mobile: ${data.complainantPhone || '[Phone Number]'}
Place: ${data.district || 'City'}, ${data.state || 'State'}
Date: ${todayStr}
`;
}
