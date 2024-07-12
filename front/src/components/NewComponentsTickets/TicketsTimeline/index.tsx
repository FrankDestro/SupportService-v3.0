import Tabs from "../Tabs.tsx";
import TabContent from '../TabContent.tsx';


function TimeLine() {
    return (
        <div>
            <div className="App">

                <Tabs>
                    <TabContent label="TimeLine">
                        <h2>Conteúdo da Aba 1</h2>
                        <p>Este é o conteúdo da primeira aba.</p>
                    </TabContent>
                    <TabContent label="Detalhes Solicitação">
                        <h2>Conteúdo da Aba 2</h2>
                        <p>Este é o conteúdo da segunda aba.</p>
                    </TabContent>
                    <TabContent label="Anexos">
                        <h2>Conteúdo da Aba 3</h2>
                        <p>Este é o conteúdo da terceira aba.</p>
                    </TabContent>
                </Tabs>
            </div>
        </div>
    )
}

export default TimeLine