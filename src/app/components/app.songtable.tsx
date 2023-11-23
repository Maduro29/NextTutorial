'use client'
import Link from 'next/link';
import Table from 'react-bootstrap/Table';

interface IProps {
    songs: ISong[]
}

function SongTable(props: IProps) {

    const { songs } = props;
    // console.log('check props:', authors)

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {songs?.map(song => {
                        return (
                            <tr>
                                <td>{song.id}</td>
                                <td>{song.title}</td>
                                <td>{song.nameAuthor}</td>
                                <td>
                                    <Link href={song.pathUrl}>Link</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default SongTable;