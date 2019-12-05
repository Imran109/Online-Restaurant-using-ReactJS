import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


    function RenderComments({comments}) {
        if (comments == null) {
            return (
            <div>
                {/* Returining empty div */}
            </div>
            )
        }
        const cmnt = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>
                        {comment.comment}
                    </p>
                    <p>
                        -- {comment.author},
                    {
                    new Intl.DateTimeFormat('en-UK',
                    {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                        }).format(new Date(comment.date))
                        }
                    </p>
                </li>
            )
        })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>
                     Comments 
                </h4>
                <ul className='list-unstyled'>
                    {cmnt}
                </ul>

            </div>
        )
    }

    function RenderDish({dish}){
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
            <div>
                {/* Returining empty div */}
            </div>
            )
        }
    }

    const DishDetail = (props)=>{
        const dish = props.dish
        if (dish == null) {
            return (
            <div>
               {/* Returining empty div */}

            </div>
            )
        }
        const commentValue = <RenderComments comments = {props.dish.comments} />
        const dishValue = <RenderDish dish={props.dish} />

        return (
            <div className='row'>
                {dishValue}
                {commentValue}
            </div>
        )
    }
export default DishDetail