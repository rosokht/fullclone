/**
 * @function
 * @description Deep clone of anything.
 * @param {object} instance The thing instance you want to clone.
 * @param {number} deep The deep of function
 * @returns {object} A new cloned instance.
 */
export function clone<T>(instance: T, deep = 1): (T | any[])
{
    if (deep < 0)
        return instance

    try
    {
        if (Array.isArray(instance))
        {
            return instance.map(item => clone(item, deep - 1))
        }
        else if (typeof instance === 'object')
        {
            if (instance)
            {
                let temp: any
                // @ts-ignore
                if (instance.constructor)
                {
                    try
                    {
                        temp = Object.assign(
                            Object.create(
                                // Set the prototype of the new object to the prototype of the instance.
                                // Used to allow new object behave like class instance.
                                Object.getPrototypeOf(instance),
                            ),
                            // Prevent shallow copies of nested structures like arrays, etc
                            JSON.parse(JSON.stringify(instance)),
                        )
                    }
                    catch (e)
                    {
                        temp = Object.assign(
                            Object.create(
                                // Set the prototype of the new object to the prototype of the instance.
                                // Used to allow new object behave like class instance.
                                Object.getPrototypeOf(instance),
                            ),
                            // Prevent shallow copies of nested structures like arrays, etc
                            instance,
                        )
                    }
                }
                else
                {
                    temp = JSON.parse(JSON.stringify(instance))
                }

                Object.keys(instance).forEach(item =>
                {
                    // @ts-ignore
                    temp[ item ] = clone(instance[ item ], deep - 1)
                })

                Object.getOwnPropertySymbols(instance).forEach(symbol =>
                {
                    // @ts-ignore
                    temp[ symbol ] = instance[ symbol ]
                })

                return temp
            }
            else
            {
                return instance
            }
        }
        else
        {
            return instance
        }
    }
    catch (e)
    {
        // console.error(e)
        return instance
    }
}