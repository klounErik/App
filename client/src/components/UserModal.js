import React from 'react'
import {UserForm} from './UserForm'
import { Modal } from 'antd'

export const UserModal = props => {
    return (
        <Modal
            title={"Create user"}
            visible={props.open}
            onOk={props.handleClick}
            onCancel={props.handleClick}
            footer={null}
        >
            <div>
                <UserForm handleClick={props.handleClick} UserChanged={props.UserChanged} />
            </div>
        </Modal>
    )
}

