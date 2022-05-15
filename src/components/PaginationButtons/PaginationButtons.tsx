import React, {FC, useEffect, useState} from 'react';
import ListOfCharcters from "../ListOfCharcters/ListOfCharcters";

interface PaginationButtons {
}

export const PaginationButtons: FC<PaginationButtons> = () => {
    const [total, setTotal] = useState<string | null>();
    const [buttonNumber, setButtonNumber] = useState<string | undefined>("1")

    useEffect(() => {
        const getTotal = async () => {
            const response = await fetch("https://swapi.dev/api//people/?page=1")
            const json = await response.json()
            setTotal(json.count)
        }
        getTotal()
    }, [])

    const createButtons = () => {
        const array = total && setNumberOfButtons(total)
        return (
            <>
                {array && array.map((v) => {
                        return <button onClick={buttonHandler} key={v} id={v}>{v}</button>
                    }
                )}
            </>
        )
    }

    const setNumberOfButtons = (totalCount: string) => {
        let buttonCount: string[] = []
        let amountOfButtons = (+totalCount / 10) + 1
        let counter = 1
        while (counter < amountOfButtons) {
            buttonCount.push("" + counter)
            counter++
        }
        return buttonCount
    }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const button = event.currentTarget as HTMLInputElement
        const value: string = button.id
        setButtonNumber(value)
    }


    return (
        <div>
            {buttonNumber && <ListOfCharcters buttonNumber={buttonNumber}/>}
            {createButtons()}
        </div>
    )
}