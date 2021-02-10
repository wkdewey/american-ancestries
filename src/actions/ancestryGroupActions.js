export const fetchAncestryGroups = () => {
  return (dispatch) => {
    fetch("https://damp-plateau-70733.herokuapp.com/api/v1/ancestry_groups")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_ANCESTRY_GROUPS", ancestryGroups: json.data });
        dispatch({
          type: "ADD_PLACE_ANCESTRY_GROUPS",
          ancestryGroups: json.data,
        });
      });
  };
};
