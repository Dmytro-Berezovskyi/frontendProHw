import { NavLink } from "react-router-dom";
import { Flex, Tag, Timeline, Divider, Badge } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

import { ReactComponent as DiplomaSVG } from "../../assets/icons/diploma.svg";
import PhotoIMG from "../../assets/images/photo.jpg";

export default function Resume() {
    return (
        <div style={{display: 'flex', gap: '30px'}}>
            <div style={{width:'70%'}}>
                <h1 style={{margin: 0, marginBottom: '20px'}}>Dmytro Berezovskyi</h1>
                <h3>Junior Front-end developer</h3>

                <h4 style={{marginBottom: 0}}>Summary</h4>
                <Divider style={{borderTop: '2px solid rgba(128, 128, 128, 0.2)', margin: '10px 0 10px 0'}}/>
                <p>
                    I am studying Front-end development. I aspire to become an excellent specialist in my field.
                    During my studies, I have acquired skills in JavaScript, React, Redux, GitHub.
                </p>

                <h4 style={{marginBottom: 0}}>Skills</h4>
                <Divider style={{borderTop: '2px solid rgba(128, 128, 128, 0.2)', margin: '10px 0 10px 0'}}/>
                <Flex gap="4px 0" wrap>
                    <Tag bordered={false} color="purple">GitHub</Tag>
                    <Tag bordered={false} color="purple">Ajax</Tag>
                    <Tag bordered={false} color="purple">DOM</Tag>
                    <Tag bordered={false} color="purple">NPM</Tag>
                    <Tag bordered={false} color="purple">JavaScript</Tag>
                    <Tag bordered={false} color="purple">Webpack</Tag>
                    <Tag bordered={false} color="purple">Redux-Thunk</Tag>
                    <Tag bordered={false} color="purple">React</Tag>
                    <Tag bordered={false} color="purple">OOP</Tag>
                    <Tag bordered={false} color="purple">JSON</Tag>
                    <Tag bordered={false} color="purple">Redux</Tag>
                </Flex>

                <h4 style={{marginBottom: 0}}>Additional courses and trainings</h4>
                <Divider style={{borderTop: '2px solid rgba(128, 128, 128, 0.2)', margin: '10px 0 10px 0'}}/>
                <Timeline
                    items={[
                        {
                            children:
                                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    <span>Front-end Pro at <b>Hillel IT School</b></span>
                                    <span>2024</span>
                                </div>
                        },
                        {
                            children:
                                <>
                                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                        <span>JavaScript basics. Syntax, conditions and loops at <b>Creative Practice</b></span>
                                        <span>2024</span>
                                    </div>
                                    <NavLink to="https://cases.media/cert/ZYRML0?locale=en" replace><DiplomaSVG /> https://cases.media/cert/ZYRML0?locale=en</NavLink>
                                </>,
                        },
                        {
                            children:
                                <>
                                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                        <span>Frontend basics. HTML and CSS at <b>Creative Practice</b></span>
                                        <span>2024</span>
                                    </div>
                                    <NavLink to="https://cases.media/cert/SYB3P5?locale=en" replace><DiplomaSVG /> https://cases.media/cert/SYB3P5?locale=en</NavLink>
                                </>,
                        },
                    ]}
                />
            </div>

            <div style={{width: '30%'}}>
                <img src={PhotoIMG} alt="photo" style={{width: 300, height: 300, borderRadius: 10}} />

                <h4 style={{marginBottom: 0}}>Contacts</h4>
                <Divider style={{borderTop: '2px solid rgba(128, 128, 128, 0.2)', margin: '10px 0 10px 0'}}/>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px', marginBottom: '5px'}}>
                    <h5 style={{color: 'rgba(128, 128, 128, 0.6)', margin: '0'}}>Location</h5>
                    <span>Prague, Prague, Czech Republic</span>
                    <span><CheckCircleTwoTone twoToneColor='#1677FF'/> Remote</span>
                    <span><CheckCircleTwoTone twoToneColor='#1677FF'/> Office</span>
                </div>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px', marginBottom: '5px'}}>
                    <h5 style={{color: 'rgba(128, 128, 128, 0.6)', margin: '0'}}>Email</h5>
                    <span>berezovskyidmytro27@gmail.com</span>
                </div>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px', marginBottom: '5px'}}>
                    <h5 style={{color: 'rgba(128, 128, 128, 0.6)', margin: '0'}}>Phone</h5>
                    <span>+420773925304</span>
                </div>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px', marginBottom: '5px'}}>
                    <h5 style={{color: 'rgba(128, 128, 128, 0.6)', margin: '0'}}>LinkedIn</h5>
                    <NavLink
                        to="https://www.linkedin.com/in/dmytro-berezovskyi-/">https://www.linkedin.com/in/dmytro-berezovskyi-/</NavLink>
                </div>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px', marginBottom: '5px'}}>
                    <h5 style={{color: 'rgba(128, 128, 128, 0.6)', margin: '0'}}>GitHub</h5>
                    <NavLink to="https://github.com/Dmytro-Berezovskyi">https://github.com/Dmytro-Berezovskyi</NavLink>
                </div>

                <h4 style={{marginBottom: 0}}>Languages</h4>
                <Divider style={{borderTop: '2px solid rgba(128, 128, 128, 0.2)', margin: '10px 0 10px 0'}}/>

                <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '5px'}}>
                    <Badge color='#1677FF' text='Ukrainian C2' />
                    <Badge color='#1677FF' text='Russian C1' />
                    <Badge color='#1677FF' text='Czech B1' />
                    <Badge color='#1677FF' text='English A2' />
                </div>
            </div>


        </div>
    );
}