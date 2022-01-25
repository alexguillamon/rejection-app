export const loadLocalStore = () => {
  try {
    const localStoreState = localStorage.getItem('state');
    if (localStoreState === null) return undefined;
    return JSON.parse(localStoreState)
  } catch {
    return undefined
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('error: save state failed');
  }
}
