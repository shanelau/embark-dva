import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  const _this = this;
  function handleFileUpload(e) {
    e.preventDefault();
    const file = [e.target];  // 为了符合 embark 的格式
    window.EmbarkJS.Storage.uploadFile(file).then((hash) => {
      let url = window.EmbarkJS.Storage.getUrl(hash);
      url = url.replace('http://localhost:8080', 'https://gateway.ipfs.io');
      console.log(url);

      _this.setState({
        img_src: url,
      });
    });
  }

  return (
    <div className={styles.normal}>
      {/* <image src={this.state.img_src} />*/}
      <input type="file" name="images" onChange={handleFileUpload} />

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
