import classes from './Social_Media.module.css'

const Social_Media = ()=>{
    return(
        <div className={`container`}>
            <div className={`row ${classes.subject}`}>
                <div className='col-12'>Social Media</div>
            </div>
            <div className={`row ${classes.social_media}`}>
                <div className='col-md-2 col-sm-6 col-xs-12'>
                    <i class="fas fa-heart"></i>
                    <p>Facebook</p>
                    <h3>578</h3>
                </div>
                <div className='col-md-2 col-sm-6 col-xs-12'>
                    <i class="fas fa-heart"></i>
                    <p>Facebook</p>
                    <h3>578</h3>
                </div>
                <div className='col-md-2 col-sm-6 col-xs-12'>
                    <i class="fas fa-heart"></i>
                    <p>Facebook</p>
                    <h3>578</h3>
                </div>
                <div className='col-md-2 col-sm-6 col-xs-12'>
                    <i class="fas fa-heart"></i>
                    <p>Facebook</p>
                    <h3>578</h3>
                </div>
            </div>
        </div>
    )
}

export default Social_Media