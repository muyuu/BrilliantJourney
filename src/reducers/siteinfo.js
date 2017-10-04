// @flow
const initialSiteInfo: SiteInfo = {
    name: "brilliantJourney",
};

export const siteInfo = (state: SiteInfo = initialSiteInfo, action: Action): SiteInfo => {
    switch(action.type){
        default:
            return state;
    }
};


