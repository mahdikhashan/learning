import CloseIcon from '@mui/icons-material/Close';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import * as Helper from '@user-manager/helper';
import axios from 'axios';
import CountryList from 'countrycitystatejson';
import * as React from 'react';
import { createContext, useContext } from 'react';

import DocTemplateImage from '@assets/doc.png';

import PDFTemplateImage from '../../../../../assets/pdf.png';
import { UserFile } from '../../../../domain/users/user';
import { useNotifier } from '../../../../services/notificationAdaptor';
// import { useUser } from '../../../../services/userAdaptor';
import { NotificationService } from '../../../ports';

export const DialogModal = ({ isOpen, onDisagree, onAgree }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to remove from user profile?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous data to Google,
            even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onDisagree()}>Disagree</Button>
          <Button onClick={() => onAgree()}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const DocumentFile = ({ name, type, size }) => {
  const FileFormatTemplate = type === 'application/pdf' ? PDFTemplateImage : DocTemplateImage;
  const { removeFileFromUpload } = useContext(FormContext);
  const [openDialogModal, setDialogModal] = React.useState(false);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          p: 2,
          alignItems: 'center',
          maxWidth: '500px',
          position: 'relative'
        }}
      >
        <Box sx={{ position: 'absolute', right: '0.5rem', top: '0.5rem' }}>
          <IconButton onClick={() => setDialogModal(true)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <img src={FileFormatTemplate} alt="document-thumbnail" sizes="25px" />
        <Box>
          <p>{name}</p>
          <p>Size: {size}</p>
        </Box>
      </Paper>
      <DialogModal
        isOpen={openDialogModal}
        onAgree={() => removeFileFromUpload(name)}
        onDisagree={setDialogModal}
      />
    </>
  );
};

export const Documents = () => {
  const notifier: NotificationService = useNotifier();
  // const { uploadUserDocument } = useUser();

  const {
    documents,
    setDocuments,
    removeFileDialog,
    openRemoveFileDialog,
    removeFileFromUpload,
    closeRemoveFileDialog,
    addDocumentToState,
    removeDocumentFromState
  } = useContext(FormContext);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const onFileChange = (e) => {
    setOpen(true);

    const formData = new FormData();
    formData.append('document', e.target.files[0]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.post('http://localhost:3001/upload-documents', formData).then((response) => {
      if (response.data.status === true) {
        const file = e.target.files[0];
        addDocumentToState({ name: file.name, file, type: file.type, size: file.size });
        notifier.notify(response.data.message);
        // console.log(file.type);
      } else {
        notifier.notify('failed');
      }

      setOpen(false);
    });
  };

  return (
    <>
      <Paper variant="outlined" sx={{ mb: { xs: 3, md: 2 }, p: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" gutterBottom>
            Documents
          </Typography>
          <Button variant="outlined" aria-label="upload picture" component="label">
            Upload
            <input
              hidden
              accept="application/pdf,.doc,.docx,.txt"
              type="file"
              onChange={onFileChange}
            />
            <UploadFileIcon />
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              variant="outlined"
              sx={{
                padding: 4,
                mt: 2,
                backgroundColor: '#e3f2fd',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                {documents.length > 0 ? (
                  documents.map((file: UserFile) => (
                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={6}>
                      <DocumentFile
                        name={file.name}
                        key={file.name}
                        type={file.type}
                        size={Helper.formatBytes(file.size)}
                      />
                    </Grid>
                  ))
                ) : (
                  <Typography variant="h6" component="h2" color="#2196f3">
                    Empty, No file uploaded!
                  </Typography>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export const BasicInformation = () => {
  const {
    country,
    setCountry,
    state,
    setState,
    city,
    setCity,
    states,
    setStates,
    cities,
    setCities
  } = useContext(FormContext);

  const countryList = CountryList.getCountries();

  const listItems = countryList.map((country) => (
    <MenuItem value={country.shortName} key={country.shortName}>
      {country.name}
    </MenuItem>
  ));

  const stateLists = states.map((state) => (
    <MenuItem value={state} key={state}>
      {state}
    </MenuItem>
  ));

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setStates(CountryList.getStatesByShort(country));
  }, [country]);

  const citiesLists = cities.map((city) => (
    <MenuItem value={city} key={city}>
      {city}
    </MenuItem>
  ));

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCities(CountryList.getCities(country, state));
  }, [country, state]);

  return (
    <>
      <Paper variant="outlined" sx={{ mb: { xs: 3, md: 2 }, p: { xs: 2, md: 3 } }}>
        <Typography variant="h5" gutterBottom>
          Basic Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="city"
              name="city"
              label="City"
              fullWidth
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              autoComplete="shipping country"
              variant="standard"
            >
              {citiesLists}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="state"
              name="state"
              label="State"
              fullWidth
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              autoComplete="shipping country"
              variant="standard"
            >
              {stateLists}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="country"
              name="country"
              label="Country"
              fullWidth
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              autoComplete="shipping country"
              variant="standard"
            >
              {listItems}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" value="yes" />}
              label="Use this address for report details"
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const FormContext = createContext({});

export const Form = ({ children }) => {
  const [country, setCountry] = React.useState('IR');
  const [state, setState] = React.useState('Tehran');
  const [city, setCity] = React.useState('Tehran');
  const [states, setStates] = React.useState(['d']);
  const [cities, setCities] = React.useState([]);
  const [documents, setDocuments] = React.useState<UserFile[]>([]);

  const addDocumentToState = (file: UserFile) => {
    setDocuments((files: UserFile[]) => [...files, file]);
  };

  const removeDocumentFromState = (name: string) => {
    setDocuments(documents.filter((file: UserFile) => file.name !== name));
    console.log(documents);
  };

  const [removeFileDialog, setRemoveFileDialog] = React.useState(false);
  const [currentFile, setCurrentFile] = React.useState('a');

  const openRemoveFileDialog = () => {
    setRemoveFileDialog(true);
  };

  const closeRemoveFileDialog = () => {
    setRemoveFileDialog(false);
  };

  const removeFileFromUpload = (name: string) => {
    removeDocumentFromState(name);
    closeRemoveFileDialog();
  };

  console.log(documents);

  const providerValue = {
    country,
    setCountry,
    state,
    setState,
    city,
    setCity,
    states,
    setStates,
    cities,
    setCities,
    documents,
    setDocuments,
    addDocumentToState,
    removeDocumentFromState,
    removeFileDialog,
    setRemoveFileDialog,
    currentFile,
    setCurrentFile,
    openRemoveFileDialog,
    closeRemoveFileDialog,
    removeFileFromUpload
  };

  return <FormContext.Provider value={providerValue}>{children}</FormContext.Provider>;
};

Form.BasicInformation = BasicInformation;
Form.Documents = Documents;

export const AddUserForm = () => {
  return (
    <>
      <Form>
        <Form.BasicInformation />
        <Form.Documents />
      </Form>
    </>
  );
};
