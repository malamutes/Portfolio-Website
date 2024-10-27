import { createContext, useContext, useState } from 'react'

export const darkContext = createContext<boolean>(true);

//if this is created in any file, it is scoped to that file so that file is "technically" consuming this context
// and so the whole file will be re-rendered
//but if it is made in a separate file like here, then if i import this intoi other files,
//only components in those other file are re-rendered as opposed to the whole "other file" itself