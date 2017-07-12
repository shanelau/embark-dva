import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  function handleFileUpload(e) {
    e.preventDefault();
    const file = [e.target];  // 为了符合 embark 的格式
    window.EmbarkJS.Storage.uploadFile(file).then((hash) => {
      const url = window.EmbarkJS.Storage.getUrl(hash);
      console.log(url);
    });
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>

      <input type="file" name="images" onChange={handleFileUpload} />

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
