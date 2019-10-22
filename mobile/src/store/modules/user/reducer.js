import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/EXAMPLE': {
        draft.profile = action.payload.user;
        break;
      }

      default:
    }
  });
}
