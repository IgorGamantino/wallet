export interface Screens {
  Home: undefined;
  CardRegistration: undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Screens {}
  }
}
