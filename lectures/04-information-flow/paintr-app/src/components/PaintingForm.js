// Material-UI Imports
import { Container } from '@material-ui/core';

function PaintingForm() {
    return (
        <div>
            <Container align="center">
                <h1> Add a new Painting</h1>
                <form>
                    <input type="text" placeholder="ImgURL"/> <br/>
                    <input type="text" placeholder="Title"/><br/>
                    <input type="text" placeholder="Artist Name"/><br/>
                    <input type="text" placeholder="date"/><br/>
                    <input type="text" placeholder="width"/><br/>
                    <input type="text" placeholder="height"/><br/>

                    <input type="submit" value="add new painting"/>
                </form>
            </Container>
        </div>
    );
}

export default PaintingForm;
