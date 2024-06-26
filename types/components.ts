// Byimaan

import React from "react"

export type ParentPropTS = {
    children: React.ReactNode
}

export type DataPropTS<T> = {
    data: T
}

export type ClassNamePropTS = {
    className : string
}


export type ClassNameOptPropTS = {
    className ?: string
}

export type ParentWithClassNamePropTS = ParentPropTS & ClassNameOptPropTS;

export type ParamsPropTS = {
    params : {
        [id: string]: string
    }
};

export type ParamsPropOptionalTS = {
    params ?: {
        [id: string]: string
    }
}

export type ObjectPropTS< V=string> = {
    [d : string] : V
}

export type ClassNameAndDataPropTS<T> = ClassNameOptPropTS & DataPropTS<T>;
export type IdPropTS<A=string> = {
    id: A
}