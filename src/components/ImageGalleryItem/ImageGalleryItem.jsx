import css from './ImageGalleryItem.module.css';
import { React, Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { image, tags, largeImageURL } = this.props;

    return (
      <>
        <img
          src={image}
          alt={tags}
          className={css.ImageGalleryItem_image}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;