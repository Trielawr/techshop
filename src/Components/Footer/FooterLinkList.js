import Button from '../Button/Button';
import '../Footer/Footer.scss';

const FooterLinkList = ({ item }) => {
    return (
       <>
          {item.map((subitem, index) =>
            { switch (subitem.type)
              { case 'link':
                  return <li className='footer-list-link' key={index}>
                            <Button
                                type={subitem.type}
                                href={subitem.to}
                                text={subitem.name}
                            />
                          </li> 
                case 'link-small':
                  return <li className='footer-list-small' key={index}>
                            <Button
                                type={subitem.type}
                                href={subitem.to}
                                text={subitem.name}
                            />
                          </li> 
                // case 'link-app':
                //   return <li className='footer-list-small' key={index}>
                //             <Button
                //                 type={subitem.type}
                //                 href={subitem.to}
                //                 text={subitem.name}
                //             />
                //           </li> 
                case 'text':
                  return <li className='footer-list-text'> {subitem.name}</li>
                default:
                  break;
              }
            }
          )}
        </>  
    )
}

export default FooterLinkList;