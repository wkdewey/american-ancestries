export const fetchPlaces = () => {
  return (dispatch) => {
    fetch("https://damp-plateau-70733.herokuapp.com/api/v1/places")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_PLACES", places: json.data });
      });
  };
};

export const addPlace = (
  place = {
    name: "",
    population: 0,
    place_ancestry_groups_attributes: {},
  }
) => {
  return (dispatch) => {
    fetch("https://damp-plateau-70733.herokuapp.com/api/v1/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(place),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "ADD_PLACE", place: json.data });
      });
  };
};
