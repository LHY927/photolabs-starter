import React, {useEffect, useReducer} from "react";

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, {
      photos: [],
      selectedPhoto: {
        "id": "-1",
        "location": {
          "city": "",
          "country": ""
        },
        "urls": {
          "full": ``,
          "regular": ``
        },
        "user": {
          "id": "",
          "username": "",
          "name": "",
          "profile": ``
        }
    },
      favPhotoIds: [],
      isPhotoDetailsModalOpen: false,
    });
    
    function reducer(state, action) {
      switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
          return ({
            ...state,
            favPhotoIds: [...state.favPhotoIds, action.photoId]
          });
        case ACTIONS.FAV_PHOTO_REMOVED:
          return ({
            ...state,
            favPhotoIds: state.favPhotoIds.filter(id => id !== action.photoId)
          });
        case ACTIONS.SET_PHOTO_DATA:
          return ({ ...state, 
            photos: action.photoData, 
            selectedPhoto: {
              "id": "-1",
              "location": {
                "city": "",
                "country": ""
              },
              "urls": {
                "full": ``,
                "regular": ``
              },
              "user": {
                "id": "",
                "username": "",
                "name": "",
                "profile": ``
              }
          },
        });
        case ACTIONS.SET_TOPIC_DATA:
          return "SET_TOPIC_DATA";
        case ACTIONS.SELECT_PHOTO:
          return ({
            ...state,
            selectedPhoto: state.photos.find(photo => photo.id === action.photoId),
            isPhotoDetailsModalOpen: true
          });
        case ACTIONS.DISPLAY_PHOTO_DETAILS:
          return ({ ...state, isPhotoDetailsModalOpen: false });
        default:
          throw new Error(
            `Tried to reduce with unsupported action type: ${action.type}`
          );
      }
    }

    // Function to load initial data
    const loadInitialData = async (photoData) => {
      try {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData: photoData})
      } catch (error) {
        console.error('Failed to load initial data:', error);
      }
    };

    // Use effect to load data on mount
    useEffect(() => {
      fetch('http://localhost:8001/api/photos')
     .then(res => res.json())
     .then(photoData => {loadInitialData(photoData)})
    }, []);

    // Action to set a photo as selected
    const onPhotoSelect = photoId => {
      if(state.photos.find(photo => photo.id === photoId)){
        dispatch({type: ACTIONS.SELECT_PHOTO, photoId: photoId});
      }else{
        throw new Error(
          `Photo ID does not exist: ${photoId}`
        );
      }
    };

    // Action to update favorite photo IDs
    const updateToFavPhotoIds = photoId => {
      if(state.favPhotoIds.includes(photoId)){
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId: photoId});
      }else{
        dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId: photoId});
      }
    };

    // Action to close the photo details modal
    const onClosePhotoDetailsModal = () => {
      dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS});
    };

    return {
      state,
      onPhotoSelect,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal,
    };
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export default useApplicationData;