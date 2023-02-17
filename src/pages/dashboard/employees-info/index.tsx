import { Avatar, Button, Card, Divider, Typography } from 'antd'

const EmployeesInfo = () => {
    return (
        <Card>
            <div className='flex flex-row justify-between items-center'>
                <Typography className="font-bold text-lg">Employees</Typography>
                <Button type='ghost'>View All Jobs</Button>
            </div>
            <Divider className='mb-3 mt-4'/>
            <Card className='my-2 bg-gray-100'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <Typography className='font-bold'>Design Team</Typography>
                        <Typography>Total Member : 10</Typography>
                    </div>
                    <div>
                        <Avatar.Group>
                            {[0,1,2,3].map(res => (
                                <Avatar style={{ backgroundColor: '#f56a00' }} src={`https://i.pravatar.cc/300?u=${res}abc`}/>
                            ))}
                        </Avatar.Group>
                    </div>
                </div>
            </Card>
        </Card>
    )
}

export default EmployeesInfo