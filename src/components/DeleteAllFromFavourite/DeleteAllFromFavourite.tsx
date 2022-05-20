import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {Modal} from "../../Modal/Modal";
import deleteAllFromFavourite from "../../actionCreators/deleteAllFromFavourite";

interface DeleteAllFromFavourite {

}

export const DeleteAllFromFavourite: FC<DeleteAllFromFavourite> = () => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () => {
        setModal(!modal)
    }

    return (
        <div>
            {
                <>
                    <button className={"delete-all-characters-button"} onClick={handleClick}><span className={"text"}>Delete all characters</span>
                    </button>
                    {modal ? (
                        <Modal>
                            <div>
                                <h1>Do you want to delete all of character from your favourite list?</h1>
                                <div className={"buttons"}>
                                    <button onClick={() => {
                                        dispatch(deleteAllFromFavourite())
                                        setModal(!modal)
                                    }}>yes
                                    </button>
                                    <button onClick={handleClick}>no</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </>
            }
        </div>
    )
}