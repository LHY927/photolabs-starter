const useApplicationData = () => {
    const [favourites, setFavourite] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState({
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
    });

    const {
        state,
        onPhotoSelect,
        updateToFavPhotoIds,
        onLoadTopic,
        onClosePhotoDetailsModal,
      } = useApplicationData();
}


/* insert app levels actions below */
export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case FAV_PHOTO_ADDED:
        return { /* insert logic */ }
      { /* insert all relevant actions as case statements*/ }  
      }
    }