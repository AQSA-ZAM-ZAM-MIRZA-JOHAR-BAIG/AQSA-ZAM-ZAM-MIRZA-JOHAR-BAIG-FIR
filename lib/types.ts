export type IncidentCategory = 
  | 'cybercrime'
  | 'theft'
  | 'assault'
  | 'harassment'
  | 'vehicle_theft'
  | 'lost_document'
  | 'financial_fraud'
  | 'domestic'
  | 'general';

export interface AccusedPerson {
  id: string;
  name: string;
  isUnknown: boolean;
  phone?: string;
  address?: string;
  description?: string;
  socialHandle?: string;
}

export interface StolenItem {
  id: string;
  itemName: string;
  estimatedValue: string;
  serialOrId?: string;
  details?: string;
}

export interface Witness {
  id: string;
  name: string;
  phone: string;
  address?: string;
}

export interface FIRFormData {
  // Step 1: Category & Station
  category: IncidentCategory;
  customCategoryTitle?: string;
  policeStationName: string;
  district: string;
  state: string;
  language: 'English' | 'Hindi-Transliterated';

  // Step 2: Complainant Details
  complainantName: string;
  complainantAge: string;
  complainantGender: string;
  guardianName: string; // Father's / Spouse's name
  complainantPhone: string;
  complainantEmail: string;
  complainantAddress: string;
  idType: string; // Aadhaar, Voter ID, Passport, Driving License, PAN
  idNumber: string;

  // Step 3: Incident Details
  incidentDate: string;
  incidentTime: string;
  incidentLocation: string;
  landmark: string;
  delayReason: string; // Crucial legal aspect if filed after delay

  // Step 4: Accused Details
  accusedList: AccusedPerson[];

  // Step 5: Incident Narrative & Evidence
  incidentNarrative: string;
  stolenItems: StolenItem[];
  evidenceTypes: string[]; // CCTV, Bank Statements, WhatsApp Chats, Call Logs, Photos, Receipts
  evidenceDescription: string;
  witnesses: Witness[];
  reliefRequested: string;

  // Metadata
  draftSavedAt?: string;
}

export interface CategoryInfo {
  id: IncidentCategory;
  title: string;
  shortDesc: string;
  iconName: string;
  bnsReferences: string[]; // Legal sections (BNSS / BNS / IPC / IT Act)
  defaultRelief: string;
  sampleNarrative: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
}
