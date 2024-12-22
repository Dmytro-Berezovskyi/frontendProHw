import { Divider, Flex, Tag } from 'antd';

export default function AboutMe() {
    return (
        <div>
            <div>
                <h1 style={{margin: 0, marginBottom: '20px'}}>Dmytro Berezovskyi</h1>
                <h3>Junior Front-end developer</h3>

                <h4>Summary</h4>
                <div className="underline"
                     style={{borderBottom: '2px solid rgba(128, 128, 128, 0.2)', width: '100%'}}>
                </div>
                <p>
                    I am studying Front-end development. I aspire to become an excellent specialist in my field.
                    During my studies, I have acquired skills in JavaScript, React, Redux, GitHub.
                    I am constantly trying to improve my English.
                </p>

                <h4>Skills</h4>
                <div className="underline"
                     style={{borderBottom: '2px solid rgba(128, 128, 128, 0.2)', width: '100%'}}>
                </div>
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

                <h4>Additional courses and trainings</h4>
                <div className="underline"
                     style={{borderBottom: '2px solid rgba(128, 128, 128, 0.2)', width: '100%'}}>
                </div>
            </div>


        </div>
    );
}