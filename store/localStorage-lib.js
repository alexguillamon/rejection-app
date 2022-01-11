export const loadLocalStore = () => {
  try {
    const localStoreState = localStorage.getItem('state');
    if (localStorage === null) return undefined;
    return JSON.parse(localStorage)
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
