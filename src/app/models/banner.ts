export interface BannerResponse {
  BannerId: number;
  Created: string;
  LastUpdated: string;
  accordian: Accordian[];
}

export interface Plugin {
  BlockingEnabled: boolean;
  ComplianceType: string;
  ComplianceTypeID: number
  PluginDomain: string;
  cName: string;
}

export interface Accordian {
  CategoyHeading: string;
  CategoyId: number;
  CategoyText: string;
  ExtraSettings: string;
  IsMandatory: boolean;
  Localization: string;
  PluginList: Plugin[]
}
