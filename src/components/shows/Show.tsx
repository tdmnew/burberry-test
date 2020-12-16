import React from "react";
import { connect } from "react-redux";
import { updateShow } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        updateShow: () => dispatch(updateShow()),
    };
};

const mapStateToProps = (state) => {
    return {
        showInfo: state.show,
    };
};

function Show({ updateShow, showInfo }) {
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        updateShow();
    }, [updateShow]);

    React.useEffect(() => {
        if (showInfo !== undefined && Object.keys(showInfo).length > 0) {
            setLoading(false);
        }
    });

    const show = () => {
        return (
            <div className="show">
                <div className="show__heading">
                    <h1>{showInfo.name}</h1>
                    <img
                        className="show__heading__image"
                        src={showInfo.image.medium}
                    />
                </div>
                <div className="show__summary"
                    dangerouslySetInnerHTML={{ __html: showInfo.summary }}
                ></div>
            </div>
        );
    };

    return <div>{loading ? null : show()}</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
