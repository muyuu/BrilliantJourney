// @flow

const initialSiteInfo = {
    name: "brilliantJourney",
};

export const siteInfo = (state: {name: string} = initialSiteInfo, action: {type: string}) => {
    switch(action.type){
        default:
            return state;
    }
};


