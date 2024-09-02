import { ChangeEvent, FC, useState } from 'react';

type Props = {
    initialName: string;
    symbol: string;
};

const Player: FC<Props> = ({ initialName, symbol }: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>(initialName);

    const handleEditClick = (): void => {
        setIsEditing((prevState: boolean) => !prevState);
    };

    const handleChangeName = (ev: ChangeEvent<HTMLInputElement>): void => {
        setName(ev.target.value);
    };

    return (
        <li>
            <span className='player'>
                {
                    isEditing
                        ? <input value={name} onChange={handleChangeName} />
                        : <span className='player-name'>{name}</span>
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
};

export default Player;