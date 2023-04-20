import { Button, Modal, Space } from "antd";
import { useState } from "react";
import styles from './index.module.less'

const Theme = () => {
  const [opened, setOpened] = useState(false);

  const onOpenClick = () => {
    setOpened(true);
  }

  return (
    <div style={{ background: '#f0f0f0', padding: 24, display: "flex", flexDirection: "column" }}>
      <h4>antd-组件库样式</h4>
      <Space>
        <Button type={"primary"}>主应用按钮1</Button>
        <Button>主应用按钮2</Button>

        <Button type="primary" onClick={onOpenClick}>Open modal window in micro app</Button>
      </Space>
      <Space style={{ marginTop: 16 }} size={24}>
        <div>
          <h4>CSS Modules</h4>
          <a className={styles.link}>我是Link</a>
        </div>
        <div>
          <h4>内联样式</h4>
          <a style={{ color: '#ea1244' }}>我是Link</a>
        </div>
        <div>
          <h4>外联样式</h4>
          <a className={"link"}>我是Link</a>
        </div>
        <div>
          <h4>默认</h4>
          <a>我是Link</a>
        </div>
      </Space>

      <Modal open={opened} visible={opened} maskClosable={true} onCancel={() => setOpened(false)}>
        <p>
          <h3>This is a modal window, open in micro app.</h3>
        </p>
      </Modal>
    </div>
  )
}

export default Theme;
