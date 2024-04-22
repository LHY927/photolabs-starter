import React, {useEffect, useState} from "react";
import photos from "mocks/photos";

const useApplicationData = () => {
    const [state, setState] = useState({
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

    // Function to load initial data
    const loadInitialData = async () => {
      try {
        setState(prev => ({ ...prev, 
          photos: photos, 
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
      }));
      } catch (error) {
        console.error('Failed to load initial data:', error);
      }
    };

    // Use effect to load data on mount
    useEffect(() => {
      loadInitialData();
    }, []);

    // Action to set a photo as selected
    const onPhotoSelect = photoId => {
      setState(prev => ({
        ...prev,
        selectedPhoto: prev.photos.find(photo => photo.id === photoId),
        isPhotoDetailsModalOpen: true
      }));
    };

    // Action to update favorite photo IDs
    const updateToFavPhotoIds = photoId => {
      if(state.favPhotoIds.includes(photoId)){
        setState(prev => ({
          ...prev,
          favPhotoIds: state.favPhotoIds.filter(id => id !== photoId)
        }));
      }else{
        setState(prev => ({
          ...prev,
          favPhotoIds: [...state.favPhotoIds, photoId]
        }));
      }
    };

    // Action to close the photo details modal
    const onClosePhotoDetailsModal = () => {
      setState(prev => ({ ...prev, isPhotoDetailsModalOpen: false }));
    };

    return {
      state,
      onPhotoSelect,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal,
    };
}

export default useApplicationData;