export const getBC_type = {
	1: 'default',
	2: 'periodic',
}

export const getSolver = {
	1: 'explicit',
	2: 'implicit',
}

export const getIC = {
	1: 'hat',
	2: 'zeros',
	3: 'burgers',
}

export const getEqn = {
	1: 'convection',
	2: 'convection',
	3: 'diffusion',
	4: 'burgers',
}

export const getDiscretization = {
	1: 'FDM',
	2: 'FVM',
}

export const getScheme = {
	1: 'backwardSpaceEuler',
	2: 'centeredSpaceEuler',
	3: 'forwardTimeEuler',
	4: 'backwardTimeEuler',
}
