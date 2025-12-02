import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'

export default function NewContact(){ 
  const initialValues = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: '',
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    avatar: Yup.string().required('Required'),
    gender: Yup.string().oneOf(['Men', 'Women'], 'Invalid gender').required('Required'),
    status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends', 'Others'], 'Invalid status').required('Required'),
    favorite: Yup.boolean(),
  })

  const handleSubmit = (value) =>{
    console.log(value);
  }

  return(
    <main className="shadow bg-white container rounded mt-4">
          <h1 className="text-center">Add new contact</h1>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label htmlFor="firstName">First name</label>
                  <Field type='text' name='firstName' id='firstName'/>
                  <ErrorMessage name='firstName' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="lastName">Last name</label>
                  <Field type='text' name='lastName' id='lastName'/>
                  <ErrorMessage name='lastName' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <Field type='text' name='phone' id='phone'/>
                  <ErrorMessage name='phone' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type='text' name='email' id='email'/>
                  <ErrorMessage name='email' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="avatar">Avatar</label>
                  <Field type='text' name='avatar' id='avatar'/>
                  <ErrorMessage name='avatar' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <Field as='select' name='gender' id='gender'>
                    <option value="">Choose gender</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                  </Field>
                  <ErrorMessage name='gender' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="status">Status</label>
                  <Field as='select' name='status' id='status'>
                    <option value="">Choose status</option>
                    <option value="Work">Work</option>
                    <option value="Family">Family</option>
                    <option value="Private">Private</option>
                    <option value="Friends">Friends</option>
                    <option value="Others">Others</option>
                  </Field>
                  <ErrorMessage name='status' component='p' className='text-danger'/>
                </div>
                <div>
                  <label htmlFor="favorite">Favorite</label>
                  <Field type='checkbox' name='favorite' id='favorite'/>
                </div>
                <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Save</button>
              </Form>
            )}
          </Formik>
    </main>
  )
}