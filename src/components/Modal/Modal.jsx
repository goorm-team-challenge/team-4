import {Modal as ModlaComponent, Button} from '@goorm-dev/gds-challenge';

const Modal = ({isOpen, handleToggle}) => {

    return(
        <ModlaComponent isOpen={isOpen} toggle={handleToggle}> 
            <ModlaComponent.Header toggle={handleToggle}>
                헤더
            </ModlaComponent.Header>
            <ModlaComponent.Body>
                컨텐츠를 넣어주세요.
            </ModlaComponent.Body>
            <ModlaComponent.Footer>
                <Button>다음</Button>
            </ModlaComponent.Footer>
        </ModlaComponent>
    )
}

export default Modal