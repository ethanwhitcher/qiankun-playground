import { Button, Divider, Modal, Space } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import { MicroApp } from "@umijs/max";
import React, { useState } from "react";
import CustomErrorBoundary from "@/components/CustomErrorBoundary";
import styles from './index.module.less'

const defaultParams = {
    base: '/',
    url: '/theme',
    settings: {
        sandbox: {
            experimentalStyleIsolation: true // true-子应用Modal弹窗无法打开 false-子应用弹窗可打开，但是样式污染
        }
    },
    //  自动捕获错误, 吊起ant <Result />
    // autoCaptureError: true
    //  自定义异常页面
    errorBoundary: (error: any) => <CustomErrorBoundary error={error} />
}

const text = `
// CSS Modules to index.module.less
.link { color: red }
<a className={styles.link}>我是Link</a>

// 内联样式
<a style={{color: 'red'}}>我是Link</a>

// 外联样式 to src/app.css
<a className={"link"}>我是Link</a>

//  默认样式
<a>我是Link</a>
`

export default function Theme() {

    const [opened, setOpened] = useState(false);

    return (
        <PageContainer
            ghost
            title={"基于sandbox: {experimentalStyleIsolation: true}样式隔离"}
        >
            <pre style={{ background: '#f0f0f0', padding: '0 24px' }}>{text}</pre>
            <Divider />

            <h3>主应用(main)</h3>
            <div style={{ background: '#f0f0f0', padding: 24, display: "flex", flexDirection: "column" }}>
                <h4>antd-组件库样式</h4>
                <Space>
                    <Button type={"primary"}>主应用按钮1</Button>
                    <Button>主应用按钮2</Button>
                </Space>
                <Space style={{ marginTop: 16 }} size={24}>
                    <div>
                        <h4>CSS Modules</h4>
                        <a className={styles.link}>我是Link</a>
                    </div>
                    <div>
                        <h4>内联样式</h4>
                        <a style={{ color: '#2572E6' }}>我是Link</a>
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
            </div>
            <Divider />
            <Button type="primary" danger onClick={() => setOpened(true)}>Parent App Open Modal</Button>
            <Modal visible={opened} maskClosable={true} onCancel={() => setOpened(false)}>
                <p>
                    <h3>This is a modal window, open in micro app.</h3>
                </p>
            </Modal>
            <Divider />
            <h3>微应用(sub-app-1)</h3>
            <MicroApp name="sub-app-1" {...defaultParams} />
            <Divider />
            <h3>微应用(sub-app-3)</h3>
            <MicroApp name="sub-app-3" {...defaultParams} />

        </PageContainer>
    )
}
