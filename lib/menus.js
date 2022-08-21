import { RiHome2Fill, RiFileCodeLine, RiFileCodeFill } from 'react-icons/ri'
import { BiCommentDetail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

export const navigations = [
  {
    id: 'home',
    title: 'Home',
    icon: <RiHome2Fill size={20} />,
    path: process.env.NEXT_PUBLIC_MAIN_URL,
    external: true,
  },
  {
    id: 'doc',
    title: 'Doc',
    icon: <RiFileCodeFill size={20} />,
    path: process.env.NEXT_PUBLIC_DOC_URL,
    external: true,
  },
 /* {
    id: 'code',
    title: 'Code',
    icon: <BsGithub size={20} />,
    path: process.env.NEXT_PUBLIC_GITHUB_URL,
    external: true,
  },*/
]