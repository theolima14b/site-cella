type userProps = {
    user: {
        name: string,
        lastName: string,
        age: number,
        isSmoker: boolean
    }
}

function UserList({ user }: userProps) {
    return (
        <li>
            <span>{`Nome:${user.name}`}</span>
            {' '}
            <span>{`${user.lastName}`}</span>
            {' '}
            { user.isSmoker && <span>Fumante</span>}
        </li>
    )
}

export default UserList


