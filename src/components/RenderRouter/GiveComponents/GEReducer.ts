import { GEAction, GEPage, GEState, GEActionType } from './GETypes';
export default function giveExperienceReducer(
  state: GEState,
  action: GEAction
): GEState {
  switch (action.type) {
    case GEActionType.NAVIGATE_TO_COMPLETED:
      return {
        ...state,
        currentPage: GEPage.COMPLETED,
        status: action.payload.status,
      };
    case GEActionType.NAVIGATE_TO_CREATE_ACCOUNT:
      return {
        ...state,
        currentPage: GEPage.CREATE_ACCOUNT,
      };
    case GEActionType.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    case GEActionType.SET_PAYMENT_METHOD_ID:
      return {
        ...state,
        selectedPaymentMethodId: action.payload,
      };
    case GEActionType.SET_FUND_DATA:
      return {
        ...state,
        content: action.payload,
      };
    case GEActionType.SET_BILLING_DETAILS:
      return {
        ...state,
        billingDetails: action.payload,
      };
    case GEActionType.NAVIGATE_TO_PREAUTHORIZED_WITHDRAWAL:
      return { ...state, currentPage: GEPage.PREAUTHORIZED_WITHDRAWAL };
    case GEActionType.NAVIGATE_TO_REQUEST_ACCOUNT:
      return { ...state, currentPage: GEPage.REQUEST_ACCOUNT };
    case GEActionType.NAVIGATE_TO_PAYMENT_INFO:
      return {
        ...state,
        currentPage: GEPage.PAYMENT_INFO,
        user: action.payload.user,
      };
    case GEActionType.NAVIGATE_TO_PAYMENT_CARD:
      return {
        ...state,
        currentPage: GEPage.PAYMENT_CARD,
      };
    case GEActionType.NAVIGATE_GIVE_NOW:
      // wipe data belonging to other pages ie content
      return { ...state, currentPage: GEPage.GIVE_NOW };
    case GEActionType.NAVIGATE_TO_AUTH:
      return { ...state, currentPage: GEPage.AUTH };
    case GEActionType.NAVIGATE_ONLINE_BANKING:
      return {
        ...state,
        currentPage: GEPage.ONLINE_BANKING,
        content: action.payload,
      };
    case GEActionType.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
