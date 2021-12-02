const cl = () => [click, setClick] = useState(false);

test('testing click' , () => { 
    const check = false;
    expect(cl.click = false);
});

const dr = () => [dropdown, setDropdown] = useState(false);
test('testing dropdown check' , () => { 
    const check = false;
    expect(dr.dropdown = false);
});

const CMM = () => setClick(false);
test('testing close mobile menu section' , () => { 
    const check = false;
    expect(CMM.closeMobileMenu = false);
});

const lo = () => location = useLocation();
test ('testing location useage', () => {
    const check =false;
    expect(lo.location = false);
})

const di =() => dispatch = useDispatch();
test ('testing dispatch useage', () => {
    const check =false;
    expect(di.dispatch = false);
})

const hi = () => history = useHistory();
test ('testing history', () => {
    const check =false;
    expect(di.dispach = false);
})
