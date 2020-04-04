import React, {useState} from 'react'
import { Form, Button, Input, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import config from '../../config'

export const UserForm = (props) => {

    const [form] = Form.useForm()
    const [image, setImage] = useState(null)

    const onFinish = values => {

        fetch(`${config.host}user/create`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.name,
                password: values.password,
                profileimage: image
            })
        }).then(res => {
            if (res.ok === true) {
                props.UserChanged()
            } else {
                return
            }

        }).then(props.handleClick)
    }

    return (
        <div className="user-form">
            <Form
                form={form}
                layout={"vertical"}
                onFinish={onFinish}
            >
                <div>
                    <Avatar image={image} setImage={setImage} />
                </div>
                <Form.Item
                    name="name"
                    label="Name">
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password">
                    <Input type="password"></Input>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">Create user</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const Avatar = (props) => {

    const [loading, setLoading] = useState(false)


    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setLoading(false)
                props.setImage(imageUrl)
            });
        }
    };

    const UploadButton = () => (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {props.image ? <img src={props.image} alt="avatar" style={{ width: '100%' }} /> : <UploadButton />}
        </Upload>
    );
}