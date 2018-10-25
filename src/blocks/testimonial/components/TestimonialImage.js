const {
    RichText,
} = wp.editor;

const { __ } = wp.i18n;

class TestimonialImage extends React.Component {

	render() {

		const { attributes } = this.props;     
        let url_chk = attributes.iconImage.url;
        let url = '';
        if( url_chk !== '' ){
            let size = attributes.iconImage.sizes;
            let imageSize = attributes.imageSize;
            url = size[imageSize].url; 

            return (                
                <div className="uagb-testinomial-image">                        
                   <img
                        className =""
                        src = { url }                        
                        alt = { attributes.iconImage.alt }                    
                    />                        
                </div>                                  
            )
        }else{
            return null;
        }       
		
	}
}

export default TestimonialImage
