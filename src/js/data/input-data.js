const inputData = {
    locations: [
        {
            id: 'hcm',
            value: 'Tp. Hồ Chí Minh'
        },
        {
            id: 'ct',
            value: 'Cần Thơ'
        },
        {
            id: 'hn',
            value: 'Tđ. Hà Nội'
        },
    ],
    date: [
        {
            id: 'hcm-hn0700',
            from: 'hcm',
            to: 'hn',
            value: '07:00 - 01/02/2023'
        },
        {
            id: 'hcm-hn0800',
            from: 'hcm',
            to: 'hn',
            value: '08:00 - 01/02/2023'
        }
    ]
};

const busMap = {
    slots: [
        {
            id: 'A15',
            isAvailable: true,
            postions: [0,2]
        }
    ],
    sizes: [
        6,6
    ]
}
export default inputData;