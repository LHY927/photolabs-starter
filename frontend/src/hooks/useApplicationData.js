const useApplicationData = () => {
    const {
      state,
      onPhotoSelect,
      updateToFavPhotoIds,
      onLoadTopic,
      onClosePhotoDetailsModal,
    } = useApplicationData();

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
}