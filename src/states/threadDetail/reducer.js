import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECIEVE_THREAD_DETAIL:
      return action.payload.detailThread;
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
