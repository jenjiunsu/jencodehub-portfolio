import { useGLTF } from '@react-three/drei'

const SwitchGirl = (props) =>{
    const { nodes, materials } = useGLTF('/models/SwitchGirl.glb')
    return (
    <group {...props} dispose={null}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_eec81790-1f04-4179-8580-ae9b901955d6'].geometry}
        material={materials['tripo_material_eec81790-1f04-4179-8580-ae9b901955d6']}
        />
    </group>
    )
}

useGLTF.preload('/models/SwitchGirl.glb')

export default SwitchGirl;

