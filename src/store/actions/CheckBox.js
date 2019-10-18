export const check = (obj) => {
    switch (obj.id) {
        case `orderSet`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `emr`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `wellcom`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `website`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `tnp`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }
        case `supply`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }
        case `igs`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `inhouse`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `fix`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `remote`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `emre`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `his`:
        case `ngyn`:
        case `fish`:
        case `gyn`:
        case `inh`:
        case `acls`:
        case `heart`:
        case `dtex`:
        case `igse`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }




        default: return ({
            type: 'CHECK_BOX',
            obj
        })
    }
};