// Byimaan

export const holdOn = async (miliSecs: number) => {
    return await new Promise(
        (res,rej) => {
            return setTimeout(()=> res(`Waiting time of ${miliSecs} ms is over!`), miliSecs)
        }
    )
}