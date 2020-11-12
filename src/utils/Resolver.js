
export const getElement=function(elements, element)
{
    return elements.includes(element) ? elements.find(field=>field==element) : null
}

export const setElement=function(elements, element)
{
    elements.includes(element) ? null : elements.push(element)
}

export const removeElement=function(elements, element)
{
    elements.includes(element) ? elements.splice(elements.findIndex(field=>field.id==element.id),1) : null
}