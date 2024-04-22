import React, {useEffect, useState} from "react";
import photos from "mocks/photos";

const useApplicationData = () => {
    const [state, setState] = useState({
      photos: [],
      selectedPhoto: null,
      favPhotoIds: [],
      isPhotoDetailsModalOpen: false,
    });

    // Function to load initial data
    const loadInitialData = async () => {
      try {
        const { data } = photos;
        setState(prev => ({ ...prev, 
          photos: data, 
          selectedPhoto: {
            "id": "-1",
            "location": {
            "city": "Montreal",
            "country": "Canada"
            },
            "urls": {
            "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
            "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
            },
            "user": {
            "id": "1",
            "username": "exampleuser",
            "name": "Joe Example",
            "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
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
      console.log("select photo");
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
      console.log("close for photo")
    };

    return {
      state,
      onPhotoSelect,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal,
    };
}

export default useApplicationData;